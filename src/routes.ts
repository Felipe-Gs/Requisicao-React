import { FastifyInstance } from "fastify"
import * as Z from "zod";



export async function AppRoutes(app: FastifyInstance){
    let users =[{
        nome: 'Felipe Gomes',
        email: 'contatofelipegomes.dev@gmail.com',
        password: '12345',
    }];
    
    app.get('/verItens', (req, res)=>{
        try {
            return users
        } catch (err: any) {
            if(err.name === 'ZodError'){
                return res.status(400).send({
                    message: 'Ops, ouve algum problema com o servidor!'
                });
            }
            return res.status(500).send({
                message: 'Erro interno no servidor'
            })
        }
    })

    app.post('/login', (req, res) => {
        try {
            const usersBody = Z.object({
                email: Z.string().email(),
                password: Z.string().min(3)
            }).required();
            const validData = usersBody.parse(req.body);
            const {email, password} = validData;
            const user = users.find(user => user.email === email && user.password === password);
        if(user){
            return res.status(200).send({
                message: 'Login realizado com sucesso'
            })
        }else{
            return res.status(401).send({
                message: 'Email ou senha incorretos'
            });
        }
        } catch (err: any) {
            if(err.name === 'ZodError'){
                return res.status(400).send({
                    message: 'Dados de login invalidos. Por favor, verifique seus dados e tente novamente'
                });
            }
            return res.status(500).send({
                message: 'Erro interno no servidor'
            })
        }
    })


    app.post('/cadastro', (req, res)=>{
        try {
            const usersBody = Z.object({
                email: Z.string().email(),
                password: Z.string().min(3),
                nome: Z.string().min(4),
            }).required();
            const validData = usersBody.parse(req.body);
            const {email, password, nome} = validData
            const user = users.find(user => user.email === email && user.password === password);
            if(!user){
                users.push({email, password, nome})
                return res.status(200).send({
                    message: 'Login realizado com sucesso'
                })
            }else{
                return res.status(401).send({
                    message: 'Usuario ja cadastrado!'
                })
            }
        } catch (err: any) {
            if(err.name === 'ZodEroor'){
                return res.status(400).send({
                    message: 'Dados invalidos'
                });
            }
            return res.status(500).send({
                message: 'Erro interno no servidor'
            })
        }
    })

    app.post('/deletar', (req, res)=>  {
        try {
            const usersBody= Z.object({
                email: Z.string().email(),
                password: Z.string().min(3)
            }).required();
            const validData = usersBody.parse(req.body)
            const {email, password} = validData
            const user = users.filter(user => user.email !== email || user.password !== password)
            if(user){
                users = user
                return res.status(200).send({
                    message: 'Usuario deletado com sucesso'
                })
            }else if(users.length === 0){
                return res.status(404).send({
                    message : 'Nao tem nunhum usuario cadastrado! seja o primeiro!'
                })
            }
            else{
                return res.status(401).send({
                    message: 'erro desconhecido!'
                })
            }
        } catch (error : any) {
            if(error.name === 'ZodErrro'){
                return res.status(400).send({
                    message: 'Dados invalidos'
                })
            }
            return res.status(500).send({
                message: 'Erro interno no servidor'
            })
        }
    })
}