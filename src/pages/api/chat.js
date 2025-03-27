export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  
    const { messages } = req.body;
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Sen foydalanuvchiga bu sayt haqida tushuntiradigan chatbot ekansan. Savollariga aniq, foydali va qisqa javob ber.",
            },
            ...messages,
          ],
        }),
      });
  
      if (!response.ok) {
        const error = await response.text();
        console.error("OpenAI error:", error);
        return res.status(500).json({ message: "OpenAI'dan xatolik: " + error });
      }
  
      const data = await response.json();
      const message = data.choices?.[0]?.message?.content;
  
      if (!message) {
        return res.status(500).json({ message: "Javob topilmadi" });
      }
  
      res.status(200).json({ message });
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ message: "Serverda xatolik yuz berdi" });
    }
  }
  