import { IsAlphanumeric,IsEmail,IsEnum,IsInt,IsNotEmpty,IsString,Matches,MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    email: string;

    @IsNotEmpty()
    @MinLength(3,{message:'Company must have atleast 3 characters'})
    @IsAlphanumeric(null,{
        message:'Company does not allow other than alpha numeric characters'
    })
    company:string;
}
