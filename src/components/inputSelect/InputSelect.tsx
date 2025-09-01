export default function InputSelect({
  textLabel,
  textId,
  textName,
  optionTextValue,
  textOption,
  textOption1,
  textOption2,
  textOption3,
  textOption4,
  textOption5,
}: {
  textLabel: string;
  textId: string;
  textName: string;
  optionTextValue: string;
  textOption: string;
  textOption1: string;
  textOption2: string;
  textOption3: string;
  textOption4: string;
  textOption5: string;

}) {
  return (
    <main >
      <label className="block text-lg font-medium text-gray-700 mb-2">{textLabel}</label>
      <select className="w-full p-2 border rounded-lg" id={textId} name={textName} required>
        <option value={optionTextValue} disabled selected>
          {textOption}
        </option>
        <option value={optionTextValue}>{textOption1}</option>
        <option value={optionTextValue}>{textOption2}</option>
        <option value={optionTextValue}>{textOption3}</option>
        <option value={optionTextValue}>{textOption4}</option>
        <option value={optionTextValue}>{textOption5}</option>
      </select>
    </main>
  );
}
