interface Props {
  label: string;
  id: string;
  type: string;
  formName: string;
  register: any;
}

export const TextArea = ({ label, id, type, register }: Props) => {
  return (
    <div className="relative flex items-start border-b border-black px-2 md:px-4 xl:px-6 py-3 gap-3">
      <label htmlFor={id} className="">
        {label}:
      </label>
      <textarea
        id={id}
        type={type}
        rows={8}
        className="outline-none w-full resize-none"
        {...register(`${id}`, { required: true })}
      />
    </div>
  );
};
