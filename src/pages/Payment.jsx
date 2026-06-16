function Payment() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-slate-800">To‘lov qilish</h1>

      <p className="mt-4 text-gray-600">
        Bron tasdiqlangandan so‘ng quyidagi usullar orqali to‘lov qilishingiz mumkin.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold text-slate-800">
            Bank hisob raqami
          </h2>

          <p className="mt-4 text-gray-600">
            To‘g‘ridan-to‘g‘ri bank hisob raqamiga to‘lov qilish imkoniyati
            tez orada qo‘shiladi.
          </p>

          <button className="mt-6 w-full bg-slate-700 text-white py-3 rounded-xl opacity-70">
            Tez orada
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold text-slate-800">Payme</h2>

          <p className="mt-4 text-gray-600">
            Payme ilovasi orqali QR kodni skaner qilib to‘lov qilishingiz mumkin.
          </p>

          <div className="mt-5 bg-slate-100 rounded-2xl p-4 flex justify-center">
            <img
              src="/payme-qr.png"
              alt="Payme QR kod"
              className="w-52 h-52 object-contain rounded-xl"
            />
          </div>

          <div className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl text-center font-semibold">
            QR orqali to‘lov
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 border">
          <h2 className="text-2xl font-bold text-slate-800">Click</h2>

          <p className="mt-4 text-gray-600">
            Click orqali onlayn to‘lov qilish imkoniyati keyingi bosqichda
            qo‘shiladi.
          </p>

          <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl opacity-70">
            Tez orada
          </button>
        </div>
      </div>

      <div className="mt-10 bg-orange-50 border border-orange-200 rounded-3xl p-6">
        <h3 className="text-xl font-bold text-orange-700">Muhim eslatma</h3>
        <p className="mt-2 text-gray-700">
          To‘lov qilgandan so‘ng chekni Telegram orqali operatorga yuboring.
        </p>
      </div>
    </div>
  );
}

export default Payment;