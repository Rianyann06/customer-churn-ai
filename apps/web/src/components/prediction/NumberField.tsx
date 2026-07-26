interface NumberFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function NumberField({
  label,
  value,
  onChange,
}: NumberFieldProps) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border p-2"
      />
    </div>
  );
}