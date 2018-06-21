export interface cartelas extends Array<cartela>{};

export interface cartela extends Array<numerosCartela>{};

export interface numerosCartela {
    numero: number;
    marcadoSistema: boolean,
    marcadoUsuario: boolean,
    linha: number,
    coluna: number
}