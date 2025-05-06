import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { target: 1000, duration: '1m' },  // Ramp up to 1000 users over 1 min
    { target: 5000, duration: '10m' }, // Hold at 5000 users for 10 min
  ],
};

export default function () {
  const res = http.get('http://taskoverflow-855388552.us-east-1.elb.amazonaws.com');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
