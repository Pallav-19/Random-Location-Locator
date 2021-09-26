import { User } from './User';
import { Company } from './Company';
import { CustomMap } from "./customMap";
const custommap = new CustomMap('map');

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

custommap.addMarker(user);
custommap.addMarker(company);
