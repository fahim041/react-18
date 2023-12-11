import categories from '../categories';

interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <div>
      <label htmlFor="category">Category</label>
      <select id="category" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value=""></option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
