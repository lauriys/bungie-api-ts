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
  DestinyActivityHistoryResults,
  DestinyAggregateActivityResults,
  DestinyCharacterResponse,
  DestinyClanAggregateStat,
  DestinyDefinition,
  DestinyEntitySearchResult,
  DestinyEquipItemResults,
  DestinyHistoricalStatsAccountResult,
  DestinyHistoricalWeaponStatsData,
  DestinyItemResponse,
  DestinyManifest,
  DestinyMilestone,
  DestinyMilestoneContent,
  DestinyPostGameCarnageReportData,
  DestinyProfileResponse,
  DestinyVendorResponse,
  DestinyVendorsResponse
} from './interfaces';
import {
  PlatformErrorCodes
} from '../common';
import {
  UserInfoCard
} from '../user/interfaces';

export interface DestinyManifestServerResponse {
  Response?: DestinyManifest;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyDefinitionServerResponse {
  Response?: DestinyDefinition;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface IEnumerableOfUserInfoCardServerResponse {
  Response?: UserInfoCard[];
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyProfileResponseServerResponse {
  Response?: DestinyProfileResponse;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyCharacterResponseServerResponse {
  Response?: DestinyCharacterResponse;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyMilestoneServerResponse {
  Response?: DestinyMilestone;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyItemResponseServerResponse {
  Response?: DestinyItemResponse;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyVendorsResponseServerResponse {
  Response?: DestinyVendorsResponse;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyVendorResponseServerResponse {
  Response?: DestinyVendorResponse;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyEquipItemResultsServerResponse {
  Response?: DestinyEquipItemResults;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyPostGameCarnageReportDataServerResponse {
  Response?: DestinyPostGameCarnageReportData;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface ReadOnlyDictionaryOfstringAndDestinyHistoricalStatsDefinitionServerResponse {
  Response?: { [key: string]: undefined };
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyLeaderboardResultsServerResponse {
  Response?: { [key: string]: { [key: string]: undefined } };
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface ListOfDestinyClanAggregateStatServerResponse {
  Response?: DestinyClanAggregateStat[];
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyEntitySearchResultServerResponse {
  Response?: DestinyEntitySearchResult;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyHistoricalStatsResultsServerResponse {
  Response?: { [key: string]: undefined };
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyHistoricalStatsAccountResultServerResponse {
  Response?: DestinyHistoricalStatsAccountResult;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyActivityHistoryResultsServerResponse {
  Response?: DestinyActivityHistoryResults;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyHistoricalWeaponStatsDataServerResponse {
  Response?: DestinyHistoricalWeaponStatsData;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyAggregateActivityResultsServerResponse {
  Response?: DestinyAggregateActivityResults;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DestinyMilestoneContentServerResponse {
  Response?: DestinyMilestoneContent;
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}

export interface DictionaryOfuint32AndDestinyPublicMilestoneServerResponse {
  Response?: { [key: number]: undefined };
  ErrorCode?: PlatformErrorCodes;
  ThrottleSeconds?: number;
  ErrorStatus?: string;
  Message?: string;
  MessageData?: { [key: string]: string };
}