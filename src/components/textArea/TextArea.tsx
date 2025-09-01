export default function TextArea({
  textLabel,
  textArea,
  placeholder,
  name,
  id,
}: {
  textLabel: string;
  textArea: string;
  placeholder: string;
  name: string;
  id: string;
}) {
  return (
    <main>
      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
        {textLabel}
      </label>
      <textarea
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm resize-y"
        placeholder={placeholder}
        name={name}
        id={id}
      >
        {textArea}
      </textarea>
    </main>
  );
}
