export interface memberProps {
  name: string;
  description: string;
  image: string;
  publicId: string;
  github: string;
  banner: string;
  publicBannerId: string
  phrase: string;
}

export interface getMemberProps extends memberProps {
  id: number;
  role: roleProps;
  tags: tagProps[];
  createdAt: string;
}

export interface postMemberProps extends memberProps {
  role: number | null;
  tags: (number | null)[];
}

export interface roleProps {
  id: number | null;
  name: string;
}

export interface tagProps {
  id: number | null;
  name: string;
}

export interface projectProps {
  title: string;
  description: string;
  repository: string;
  url: string;
  image: string;
  publicId: string;
}

export interface getProjectProps extends projectProps {
  id: number;
  members: getMemberProps[];
  tags: tagProps[];
}

export interface postProjectProps extends projectProps {
  tags: (number | null)[];
}

export interface postProjectMemberData {
  projectId: number;
  members: { memberId: number; roleId: number | null }[];
}

export interface fileFromCloudProps {
  publicId: string;
  url: string;
}

export interface apiResponse {
  success: boolean;
  message?: string;
}
