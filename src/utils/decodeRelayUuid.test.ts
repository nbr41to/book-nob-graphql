import { decodeRelayUuid } from '@/utils/decodeRelayUuid';

describe('utils/decodeRelayUuid', () => {
  test('decodeRelayUuid', () => {
    expect(
      decodeRelayUuid(
        'WzEsICJwdWJsaWMiLCAiYXV0aG9yIiwgImUwMWJlZTNiLTExYWItNGNmZC04M2NlLWY3MDQ1ODhjNzM0ZSJd',
      ),
    ).toBe('e01bee3b-11ab-4cfd-83ce-f704588c734e');
  });
});
