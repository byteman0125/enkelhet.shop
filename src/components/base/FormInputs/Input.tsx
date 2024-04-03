interface Props {
  label: string;
  id: string;
  type: string;
  formName: string;
  register: any;
}
export const Input = ({ label, id, type, register }: Props) => {
  return (
    <div className="relative flex items-center border-b border-black px-2 md:px-4 xl:px-6 py-3 gap-3">
      <label htmlFor={id} className="">
        {label}:
      </label>
      <input
        id={id}
        type={type}
        className="outline-none w-full"
        {...register(`${id}`, { required: true })}
      />
    </div>
  );
};
