import { Router } from "express";
import { getTodos, getTodo, addTodo, updateTodo, deleteTodo } from "../controllers/todoController";

const router: Router = Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;