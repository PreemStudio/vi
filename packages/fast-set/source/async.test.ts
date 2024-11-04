import { complianceTestsAsync } from '@faustbrian/vi-test-suite';

import { StoreAsync } from './async.js';

complianceTestsAsync(new StoreAsync<number>(), [...Array(5).keys()]);
