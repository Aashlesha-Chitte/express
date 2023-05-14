import { Router } from 'express';
import { ProductRoutes } from './controller';
import { UserRoutes } from './controller/users';

const router = Router();

router.get('/health-check', (req, res) => {
  res.send('I am OK');
});

router.use('/config', ProductRoutes);
router.use('/users', UserRoutes);

export default router;
