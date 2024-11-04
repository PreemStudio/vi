import { complianceTestsAsync } from '@faustbrian/vi-test-suite';

import { StoreAsync } from './async.js';

complianceTestsAsync(new StoreAsync<number>(32), [...Array(5).keys()]);
