import { ApiProperty } from "@nestjs/swagger/dist"


export class CreateEstadoDto {
    
    @ApiProperty()
    parada_id: number

    @ApiProperty()
    linea_id: number

    @ApiProperty()
    status: string
}
