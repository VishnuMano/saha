"use client"

import * as z from "zod";
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation'

// import { updateUser } from '@/lib/actions/user.actions';
// import { UserValidation } from '@/lib/validations/user';

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}


function PostThread({ userId}: { userId: string }) {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver() ,
        defaultValues: {
            thread: '',
            accountId: userId,
        }
    })

    return <h1>Post Thread Form</h1>
}

export default PostThread;