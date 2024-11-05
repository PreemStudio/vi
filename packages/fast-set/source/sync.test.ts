import { complianceTestsSync } from '@faustbrian/vi-test-suite';

import { StoreSync } from './sync.js';

complianceTestsSync(new StoreSync<number>(), [...Array(5).keys()]);
