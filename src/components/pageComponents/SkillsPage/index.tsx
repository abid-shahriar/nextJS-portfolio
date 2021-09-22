import { Container } from '../../../layouts';
import Typography from '../../Typography';
import SkillCards from './SkillCards';

export default function index() {
  return (
    <Container>
      <Typography>
        I have worked with a bunch of technologies in the web development world, from HTML to NextJS and I have Intermediate level of experience in
        backend(NoSQL) technologies also. I always try to learn new technologies and do experiment with them.
      </Typography>

      <SkillCards />
    </Container>
  );
}
