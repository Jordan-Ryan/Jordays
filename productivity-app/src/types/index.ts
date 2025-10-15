export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface SearchResult {
  id: string;
  title: string;
  type: 'task' | 'note' | 'habit';
  content: string;
}