
import { Request, Response } from 'express';
import db from '../database/database';
import { userLogin } from '../types/user';
import { activitie } from '../types/atividade';


export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await db('user')
      .where({ email, password })
      .first() as userLogin;

    if (!user) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }

    return res.status(200).json({
      message: 'Login bem-sucedido',
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}

export async function getAllTodayActivities(req: Request, res: Response) {
  const { id } = req.body;
  const today = new Date();
  const date = today.toISOString().split('T')[0];

  try{
    const activities = await db('activities').where({userId:id,date:date}) as activitie[];

    if(!activities){
      return res.status(400).json({ message: 'Sem atividades registradas' });
    }
    return res.status(200).json({ activities });
  }catch (error) {
    console.error('erro ao receber informações', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }

}

export async function addNewActivitie(req: Request, res: Response) {
  const { name, type, startTime, time, notifications, regular } = req.query;
  const today = new Date();
  const date = today.toISOString().split('T')[0];
  const size = await db('activities').count('* as total');
  const { userId } = req.body;

  try{
    const activities = await db('activities').insert({id:`at${Number(size[0].total)+1}`,name:name,type:type,startTime:startTime,time:time,notifications:notifications,regular:regular,userId:userId,date:date})

    if(!name || !time || !startTime || !time || !notifications || !regular || !userId){
      return res.status(400).json({ message: 'Faltam informações' });
    }
    return res.status(200).json({ mensage:'registrado com sucesso', activities});
  }catch (error) {
    console.error('erro ao enviar informações', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }

}

export async function removeActivitie(req: Request, res: Response) {
  const { id } = req.body
try{
  if (!id ){
    return res.status(400).json({ message: 'Atividade não encontrada' });
  }
  await db('activities').delete().where({id:id})

  return res.status(200).json({ message: 'Atividade deletada' });
  }catch (error) {
    console.error('erro ao enviar informações', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
}



