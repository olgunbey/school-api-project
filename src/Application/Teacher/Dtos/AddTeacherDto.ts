import { ApiProperty } from "@nestjs/swagger";


export class AddTeacherDto {

    @ApiProperty({ example: 'Ahmet' })
    public readonly Name: string;

    @ApiProperty({ example: 'Yılmaz' })
    public readonly Surname: string;

    @ApiProperty({ example: 'ahmet@example.com' })
    public readonly Mail: string

    @ApiProperty({ example: '123456' })
    public readonly Password: string;
}