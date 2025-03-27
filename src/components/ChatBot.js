import { useState } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();
      setMessages([...updatedMessages, { role: 'assistant', content: data.message }]);
    } catch (err) {
      setMessages([...updatedMessages, { role: 'assistant', content: "Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring." }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-[90vw] max-w-xs md:max-w-sm bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col h-[70vh]">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <h4 className="font-semibold">Savolingiz bormi?</h4>
            <button onClick={() => setOpen(false)} className="text-white text-lg">✕</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded-xl max-w-[80%] ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Savolingizni yozing..."
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
            >
              {loading ? '...' : 'Yuborish'}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          💬
        </button>
      )}
    </div>
  );
}
