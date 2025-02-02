import { create } from "zustand";
import type { getProjectProps, getMemberProps, tagProps, roleProps } from "@/core/types";

interface projectStoreProps {
  projects: getProjectProps[];
  selectedProject: getProjectProps | null;
  setProjects: (projects: getProjectProps[]) => void;
  setSelectedProject: (project: getProjectProps | null) => void;
}

interface membersStoreProps {
  members: getMemberProps[];
  setMembers: (members: getMemberProps[]) => void;
  selectedMember: getMemberProps | null;
  setSelectedMember: (member: getMemberProps | null) => void;
}

interface tagsStoreProps {
  tags: tagProps[];
  setTags: (tags: tagProps[]) => void;
  suggestionsTags: tagProps[];
  setSuggestionsTags: (tags: tagProps[]) => void;
}

interface projectMembersStoreProps {
  projectMembers: getMemberProps[];
  setProjectMembers: (members: getMemberProps[]) => void;
}

interface rolesStoreProps {
  roles: roleProps[];
  setRoles: (roles: roleProps[]) => void;
}

interface projectBannerProps {
  projectBanner: getProjectProps | null;
  setProjectBanner: (project: getProjectProps) => void;
}

export const projectStore = create<projectStoreProps>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

export const membersStore = create<membersStoreProps>((set) => ({
  members: [],
  setMembers: (members) => set({ members }),
  selectedMember: null,
  setSelectedMember: (member) => set({ selectedMember: member }),
}));

export const tagsStore = create<tagsStoreProps>((set) => ({
  tags: [],
  setTags: (tags) => set({ tags }),
  suggestionsTags: [],
  setSuggestionsTags: (tags) => set({ suggestionsTags: tags }),
}));

export const projectMembersStore = create<projectMembersStoreProps>((set) => ({
  projectMembers: [],
  setProjectMembers: (members) => set({ projectMembers: members }),
}))

export const rolStore = create<rolesStoreProps>((set) => ({
  roles: [],
  setRoles: (roles) => set({ roles }),
}))



// Utilities
export const projectBannerStore = create<projectBannerProps>((set) => ({
  projectBanner: null,
  setProjectBanner: (project) => set({ projectBanner: project }),
}));