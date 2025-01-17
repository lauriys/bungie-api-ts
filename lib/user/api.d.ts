/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.4.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bugie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import { BungieCredentialType, GeneralUser, HardLinkedUserMembership, PublicPartnershipDetail, UserMembershipData, UserTheme } from './interfaces';
import { BungieMembershipType, ServerResponse } from '../common';
export interface GetBungieNetUserByIdParams {
    /** The requested Bungie.net membership id. */
    id: string;
}
/** Loads a bungienet user by membership id. */
export declare function getBungieNetUserById(http: HttpClient, params: GetBungieNetUserByIdParams): Promise<ServerResponse<GeneralUser>>;
export interface SearchUsersParams {
    /** The search string. */
    q?: string;
}
/** Returns a list of possible users based on the search string */
export declare function searchUsers(http: HttpClient, params: SearchUsersParams): Promise<ServerResponse<GeneralUser[]>>;
/** Returns a list of all available user themes. */
export declare function getAvailableThemes(http: HttpClient): Promise<ServerResponse<UserTheme[]>>;
export interface GetMembershipDataByIdParams {
    /** The membership ID of the target user. */
    membershipId: string;
    /** Type of the supplied membership ID. */
    membershipType: BungieMembershipType;
}
/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 */
export declare function getMembershipDataById(http: HttpClient, params: GetMembershipDataByIdParams): Promise<ServerResponse<UserMembershipData>>;
/**
 * Returns a list of accounts associated with signed in user. This is useful for
 * OAuth implementations that do not give you access to the token response.
 */
export declare function getMembershipDataForCurrentUser(http: HttpClient): Promise<ServerResponse<UserMembershipData>>;
export interface GetPartnershipsParams {
    /** The ID of the member for whom partnerships should be returned. */
    membershipId: string;
}
/** Returns a user's linked Partnerships. */
export declare function getPartnerships(http: HttpClient, params: GetPartnershipsParams): Promise<ServerResponse<PublicPartnershipDetail[]>>;
export interface GetMembershipFromHardLinkedCredentialParams {
    /** The credential to look up. Must be a valid SteamID64. */
    credential: string;
    /** The credential type. 'SteamId' is the only valid value at present. */
    crType: BungieCredentialType;
}
/**
 * Gets any hard linked membership given a credential. Only works for credentials
 * that are public (just SteamID64 right now). Cross Save aware.
 */
export declare function getMembershipFromHardLinkedCredential(http: HttpClient, params: GetMembershipFromHardLinkedCredentialParams): Promise<ServerResponse<HardLinkedUserMembership>>;
