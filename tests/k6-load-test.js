import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  const writeRes = http.post('http://localhost:8000/write/testkey?value=test');

  check(writeRes, {
    'write status is 200': (r) => r.status === 200,
  });

  const readRes = http.get('http://localhost:8000/');

  check(readRes, {
    'read status is 200 or 404': (r) => r.status === 200 || r.status === 404,
  });

  sleep(1);
}
