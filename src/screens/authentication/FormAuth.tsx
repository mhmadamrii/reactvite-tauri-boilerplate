import Spinner from '~/components/Spinner';
import axios from 'axios';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { InputPassword } from '~/components/ui/input-password';
import { AuthFormSchema } from '~/lib/types/schemas';
import { useMutation } from '@tanstack/react-query';
import { loginAction } from '~/actions/auth.action';
import { useNavigate } from 'react-router-dom';
import { cn } from '~/lib/utils';
import { toast } from '~/components/ui/use-toast';
import { ToastAction } from '~/components/ui/toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '~/components/ui/form';

export default function FormAuth() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof AuthFormSchema>) => {
      return loginAction(data);
    },
    onSuccess: (response) => {
      toast({
        title: 'Login Successful',
        description: JSON.stringify(response),
        action: (
          <ToastAction altText="Goto schedule to undo">
            Ok
          </ToastAction>
        ),
      });
      // navigate('/homepage');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  async function onSubmit(
    data: z.infer<typeof AuthFormSchema>,
  ) {
    mutate(data);
    // return axios.post(`http://localhost:3004/login`, {
    //   Username: data.username,
    //   Password: data.password,
    // });
  }

  return (
    <section className="flex w-full items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-3"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="h-[60px] text-[18px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputPassword
                    id="password"
                    placeholder="password"
                    autoComplete="new-password"
                    className="h-[60px] text-[18px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className={cn(
              'w-full bg-blue-500 py-7 text-[18px] text-white hover:bg-blue-400',
              {
                'border border-blue-500 bg-white hover:bg-white':
                  isPending,
              },
            )}
            type="submit"
          >
            {isPending ? <Spinner /> : 'Submit'}
          </Button>
        </form>
      </Form>
    </section>
  );
}
