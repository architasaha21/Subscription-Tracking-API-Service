import { Router } from 'express';

const userRouter = Router();

//GET /users -> gets all users
//GET /users/:id -> gets user by id

userRouter.get('/', (req, res) => res.json({ title: 'GET all users' }));

userRouter.get('/:id', (req, res) => res.json({ title: 'GET user details' }));

userRouter.post('/', (req, res) => res.json({ title: 'CREATE a new user' }));

//PUT -> used for updates
userRouter.put('/:id', (req, res) => res.json({ title: 'UPDATE user' }));

userRouter.delete('/:id', (req, res) => res.json({ title: 'DELETE user' }));

export default UserRouter