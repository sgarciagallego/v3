import List from '@/components/atoms/list';
import Hyperlink from '@/components/atoms/link';

export default function Nav() {
  return (
    <nav>
      <List type='ul' axis='horizontal'>
        <li><Hyperlink href='/'>home</Hyperlink></li>
        <li><Hyperlink href='/work'>work</Hyperlink></li>
        <li><Hyperlink href='/blog'>blog</Hyperlink></li>
        <li><Hyperlink href='/album'>album</Hyperlink></li>
      </List>
    </nav>
  );
}