import { useForm, FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be atleast 3 characters' }),
  age: z
    .number({ invalid_type_error: 'Age field is required' })
    .min(18, { message: 'Age Must be grater than 18' }),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <div style={{ padding: '40px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('name')} type="text" />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <input type="number" {...register('age', { valueAsNumber: true })} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
