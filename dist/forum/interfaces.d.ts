/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */

import {
  GeneralUser
} from '../user/interfaces';
import {
  GroupResponse
} from '../groupv2/interfaces';
import {
  IgnoreResponse,
  PagedQuery,
  TagResponse
} from '../platform';

export const enum ForumTopicsCategoryFiltersEnum {
  None = 0,
  Links = 1,
  Questions = 2,
  AnsweredQuestions = 4,
  Media = 8,
  TextOnly = 16,
  Announcement = 32,
  BungieOfficial = 64,
  Polls = 128
}

export const enum ForumTopicsQuickDateEnum {
  All = 0,
  LastYear = 1,
  LastMonth = 2,
  LastWeek = 3,
  LastDay = 4
}

export const enum ForumTopicsSortEnum {
  Default = 0,
  LastReplied = 1,
  MostReplied = 2,
  Popularity = 3,
  Controversiality = 4,
  Liked = 5,
  HighestRated = 6,
  MostUpvoted = 7
}

export const enum ForumPostSortEnum {
  Default = 0,
  OldestFirst = 1
}

export interface PostSearchResponse {
  relatedPosts?: PostResponse[];
  authors?: GeneralUser[];
  groups?: GroupResponse[];
  searchedTags?: TagResponse[];
  polls?: PollResponse[];
  recruitmentDetails?: ForumRecruitmentDetail[];
  availablePages?: number;
  results?: PostResponse[];
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.
   * 
   * If False, it does not, and may be estimated/only the size of the current page.
   * 
   * Either way, you should probably always only trust hasMore.
   * 
   * This is a long-held historical throwback to when we used to do paging with known
   * total results. Those queries toasted our database, and we were left to hastily
   * alter our endpoints and create backward- compatible shims, of which
   * useTotalResults is one.
   */
  useTotalResults?: boolean;
}

export interface PostResponse {
  lastReplyTimestamp?: string;
  IsPinned?: boolean;
  urlMediaType?: ForumMediaType;
  thumbnail?: string;
  popularity?: ForumPostPopularity;
  isActive?: boolean;
  isAnnouncement?: boolean;
  userRating?: number;
  userHasRated?: boolean;
  userHasMutedPost?: boolean;
  latestReplyPostId?: number;
  latestReplyAuthorId?: number;
  ignoreStatus?: IgnoreResponse;
  locale?: string;
}

export const enum ForumMediaType {
  None = 0,
  Image = 1,
  Video = 2,
  Youtube = 3
}

export const enum ForumPostPopularity {
  Empty = 0,
  Default = 1,
  Discussed = 2,
  CoolStory = 3,
  HeatingUp = 4,
  Hot = 5
}

export interface PollResponse {
  topicId?: number;
  results?: PollResult[];
  totalVotes?: number;
}

export interface PollResult {
  answerText?: string;
  answerSlot?: number;
  lastVoteDate?: string;
  votes?: number;
  requestingUserVoted?: boolean;
}

export interface ForumRecruitmentDetail {
  topicId?: number;
  microphoneRequired?: boolean;
  intensity?: ForumRecruitmentIntensityLabel;
  tone?: ForumRecruitmentToneLabel;
  approved?: boolean;
  conversationId?: number;
  playerSlotsTotal?: number;
  playerSlotsRemaining?: number;
  Fireteam?: GeneralUser[];
  kickedPlayerIds?: number[];
}

export const enum ForumRecruitmentIntensityLabel {
  None = 0,
  Casual = 1,
  Professional = 2
}

export const enum ForumRecruitmentToneLabel {
  None = 0,
  FamilyFriendly = 1,
  Rowdy = 2
}

export interface SaveMessageResult {
  conversationId?: number;
  messageId?: number;
}

export const enum CommunityContentSortMode {
  Trending = 0,
  Latest = 1,
  HighestRated = 2
}