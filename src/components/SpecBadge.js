export default function SpecBadge({ label, value }) {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-gray-400">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}