export default function DividerWithText({ text }: { text?: string }) {
  return (
    <div className="flex items-center w-full">
      <div className="flex-grow border-t border-gray-300"></div>
      {text && (
        <span className="mx-4 text-gray-500 whitespace-nowrap">{text}</span>
      )}
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
