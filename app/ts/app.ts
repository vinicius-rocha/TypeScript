import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

/*teste comentário*/
$('.form').submit(controller.adiciona.bind(controller));