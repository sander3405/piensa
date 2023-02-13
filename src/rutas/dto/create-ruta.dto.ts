import { ApiProperty } from "@nestjs/swagger";

export class CreateRutaDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    direction: string;
}
