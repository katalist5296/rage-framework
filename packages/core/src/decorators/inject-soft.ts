import { Container } from '../container';
import { ModuleService } from '../services/core/module.service';

export function InjectSoft<T>(Service: Function): T {
    return Container.get(ModuleService).watcherService.getByClass(<any>Service);
}
