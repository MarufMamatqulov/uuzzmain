export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
  
    const { messages } = req.body;
  
    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
      }),
    });
  
    const data = await apiRes.json();
    const message = data?.choices?.[0]?.message?.content || "Kechirasiz, xatolik yuz berdi.";
    res.status(200).json({ message });
  }
  