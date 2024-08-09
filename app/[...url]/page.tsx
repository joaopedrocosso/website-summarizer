import Chat from '@/components/Chat'
import { ragChat } from '@/lib/rag-chat'
import { redis } from '@/lib/redis'
import React from 'react'

interface PageProps{
    params: {
        url: string | string[] | undefined
    }
}

function fixUrl({ url }: { url: string[] }){
    const decode = url.map((component) => decodeURIComponent(component))
    return decode.join('/')
}

const Page = async ({ params }: PageProps) => {

    const fixedUrl = fixUrl({
        url: params.url as string[]
    })

    const alreadyIndexed = await redis.sismember("indexed-urls", fixedUrl)

    if(!alreadyIndexed){
        await ragChat.context.add({
            type: 'html',
            source: fixedUrl,
            config: {chunkOverlap: 50, chunkSize: 200}
        })

        await redis.sadd("indexed-urls", fixedUrl)
    }

    const sessionId = "mock-session"

    return (
        <Chat sessionId={sessionId} />
  )
}

export default Page