import { complianceTestsSync } from '@bombenprodukt/vi-test-suite';

import { StoreSync } from './sync.js';

complianceTestsSync(new StoreSync<number>(10), [...Array(5).keys()]);
