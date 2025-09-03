export default function InputSelect({
  textLabel,
  textId,
  textName,
  optionTextValue,
  optionTextValue1,
  optionTextValue2,
  optionTextValue3,
  optionTextValue4,
  optionTextValue5,
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
  optionTextValue1: string;
  optionTextValue2: string;
  optionTextValue3: string;
  optionTextValue4: string;
  optionTextValue5: string;
  textOption: string;
  textOption1: string;
  textOption2: string;
  textOption3: string;
  textOption4: string;
  textOption5: string;

}) {
  return (
    <main >
      <label className="block text-sm font-medium text-[var(--foreground)] mb-2">{textLabel}</label>
      <select className="w-full p-2 border rounded-lg" id={textId} name={textName} required>
        <option value={optionTextValue} disabled selected>
          {textOption}
        </option>
        <option value={optionTextValue1}>{textOption1}</option>
        <option value={optionTextValue2}>{textOption2}</option>
        <option value={optionTextValue3}>{textOption3}</option>
        <option value={optionTextValue4}>{textOption4}</option>
        <option value={optionTextValue5}>{textOption5}</option>
      </select>
    </main>
  );
}
