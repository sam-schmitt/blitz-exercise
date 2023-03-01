import DatePicker from "./previews/datePicker";
import Select from "./previews/select";
import TextDisplay from "./previews/textDisplay";
import TextInput from "./previews/textInput";

export default function PreviewController({ content }: any) {
	return (
		<>
			{content.type === "text-input" && <TextInput content={content} />}
			{content.type === "text-display" && <TextDisplay content={content} />}
			{content.type === "date-picker" && <DatePicker content={content} />}
			{content.type === "select" && <Select content={content} />}
		</>
	);
}
