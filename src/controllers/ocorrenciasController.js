
import Ocorrencia from "../models/ocorrenciaModel.js"
import getToken from "../helpers/get-token.js"
import getUserByToken from "../helpers/get-user-by-token.js"


export const getOcorrencia = async (request, response) => {
    try {
        const ocorrencia = await Ocorrencia.findAll()

        response.status(200).json(ocorrencia)
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao buscar ocorrencias"})
    }
}

export const criarOcorrencia = async (request, response) => {
    const {equipe, concluido, solucao} = request.body

    try {
        const token = getToken(request);
        const usuario = await getUserByToken(token)
        
        const ocorrenciaPost = await Ocorrencia.create({
            equipe: equipe,
            concluido: concluido,
            solucao: solucao,
            usuario_id: usuario.id
        })

        response.status(201).json({msg: "Ocorrencia criada com sucesso"})
    } catch (error) {
        console.log(error)
        response.status(500).json({Err: "Erro ao cadastrar ocorrencia"})
    }
}