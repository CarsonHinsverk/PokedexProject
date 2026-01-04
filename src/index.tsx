/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';

import ClosedPokedex from './closed';

const root = document.getElementById('root') as HTMLElement;

render(() => <ClosedPokedex />, root);
