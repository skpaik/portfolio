'use client'
import {SocialContentItem} from "@/app/_models/ContentsModel";
import {toDateFormat} from "@/libs/Utils";

type Props = {
    socialContentItem: SocialContentItem,
    itemHeaders: SocialContentItem,
}

export default function SocialCard({socialContentItem, itemHeaders}: Props) {
    return <div>
        <a href={socialContentItem.url}
           className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600">
            <strong className="font-medium">{socialContentItem.title}</strong>
            <p className="mt-1 text-xs font-medium">
                {socialContentItem.description}
            </p>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm mt-6">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.title}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{socialContentItem.title}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.username}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{socialContentItem.username}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.url}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{socialContentItem.url}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.startDate}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{toDateFormat(socialContentItem.startDate.toString())}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.stats.subscriber}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{socialContentItem.stats.subscriber}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.stats.follower}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{socialContentItem.stats.follower}</dd>
                    </div>
                    <div
                        className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">{itemHeaders.stats.following}</dt>
                        <dd className="text-gray-700 sm:col-span-2">{socialContentItem.stats.following}</dd>
                    </div>
                </dl>
            </div>
        </a>
    </div>
}
