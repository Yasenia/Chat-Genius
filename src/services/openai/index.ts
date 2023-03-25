import { Configuration, OpenAIApi } from 'openai'
import { AxiosRequestConfig } from 'axios'
import { SocksProxyAgent } from 'socks-proxy-agent'

const createProxyAgent: () => SocksProxyAgent = () => {
  const proxyAgentEnabled = process.env['PROXY_AGENT.ENABLE']
  if (!proxyAgentEnabled) return
  const proxyAgentUrl = process.env['PROXY_AGENT.URL']
  if (!proxyAgentUrl) throw Error('PROXY_AGENT.URL is not set')
  return new SocksProxyAgent(proxyAgentUrl)
}

export const openaiAxiosRequestConfig: AxiosRequestConfig = {
  httpsAgent: createProxyAgent(),
}

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

export default openai
