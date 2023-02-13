import { ApiProperty } from "@nestjs/swagger";

export class CreateRecorridoDto {
    @ApiProperty()
    name: string
}
