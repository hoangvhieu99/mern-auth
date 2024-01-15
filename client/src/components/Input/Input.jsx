export default function Input({ type, placeholder }) {
  return (
    <div className="">
      <input
        type={type}
        placeholder={placeholder}
        required
        className="bg-slate-100 p-3 rounded-lg w-full"
      />
    </div>
  );
}
