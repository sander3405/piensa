import { ApiProperty } from "@nestjs/swagger";

export class CreateParadaDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    street1: string;

    @ApiProperty()
    street2: string
}
