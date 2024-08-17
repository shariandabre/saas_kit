'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Facebook } from "lucide-react"
import PageWrapper from "@/components/wrapper/page-wrapper";
import Spinner from '@/components/spinner'
import { cn } from '@/lib/utils'

export default function SignInPage() {
  return (
    <PageWrapper >

      <div className="h-full flex items-center justify-center p-9">
        <div className="grid w-full grow items-center px-4 sm:justify-center">
          <SignIn.Root>
            <Clerk.Loading>
              {(isGlobalLoading) => (
                <>
                  <SignIn.Step name="start">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Sign in to Acme Co</CardTitle>
                        <CardDescription>Welcome back! Please sign in to continue</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <div className="grid grid-cols-2 gap-x-4">
                          <Clerk.Connection name="facebook" asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              type="button"
                              disabled={isGlobalLoading}
                            >
                              <Clerk.Loading scope="provider:facebook">
                                {(isLoading) =>
                                  isLoading ? (
                                    <Spinner size="4" />
                                  ) : (
                                    <>
                                      <Facebook className="mr-2 size-4" />
                                      Facebook
                                    </>
                                  )
                                }
                              </Clerk.Loading>
                            </Button>
                          </Clerk.Connection>
                          <Clerk.Connection name="google" asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              type="button"
                              disabled={isGlobalLoading}
                            >
                              <Clerk.Loading scope="provider:google">
                                {(isLoading) =>
                                  isLoading ? (
                                    <Spinner size="4" />
                                  ) : (
                                    <>
                                      <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4"><path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"></path></svg>
                                      Google
                                    </>
                                  )
                                }
                              </Clerk.Loading>                        </Button>
                          </Clerk.Connection>
                        </div>
                        <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                          or
                        </p>
                        <Clerk.Field name="identifier" className="space-y-2">
                          <Clerk.Label asChild>
                            <Label>Email address</Label>
                          </Clerk.Label>
                          <Clerk.Input type="email" required asChild>
                            <Input />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-destructive" />
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <Button disabled={isGlobalLoading}>
                              <Clerk.Loading>
                                {(isLoading) => {
                                  return isLoading ? (
                                    <Spinner size="4" />
                                  ) : (
                                    'Continue'
                                  )
                                }}
                              </Clerk.Loading>
                            </Button>
                          </SignIn.Action>

                          <Button variant="link" size="sm" asChild>
                            <Link href="/sign-up">Don&apos;t have an account? Sign up</Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Step>

                  <SignIn.Step name="choose-strategy">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Use another method</CardTitle>
                        <CardDescription>
                          Facing issues? You can use any of these methods to sign in.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <SignIn.SupportedStrategy name="email_code" asChild>
                          <Button type="button" variant="link" disabled={isGlobalLoading}>
                            Email code
                          </Button>
                        </SignIn.SupportedStrategy>
                        <SignIn.SupportedStrategy name="password" asChild>
                          <Button type="button" variant="link" disabled={isGlobalLoading}>
                            Password
                          </Button>
                        </SignIn.SupportedStrategy>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action navigate="previous" asChild>
                            <Button disabled={isGlobalLoading}>
                              <Clerk.Loading>
                                {(isLoading) => {
                                  return isLoading ? (
                                    <Spinner size="4" />
                                  ) : (
                                    'Go back'
                                  )
                                }}
                              </Clerk.Loading>
                            </Button>
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Step>

                  <SignIn.Step name="verifications">
                    <SignIn.Strategy name="password">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Check your email</CardTitle>
                          <CardDescription>
                            Enter the verification code sent to your email
                          </CardDescription>
                          <p className="text-sm text-muted-foreground">
                            Welcome back <SignIn.SafeIdentifier />
                          </p>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <Clerk.Field name="password" className="space-y-2">
                            <Clerk.Label asChild>
                              <Label>Password</Label>
                            </Clerk.Label>
                            <Clerk.Input type="password" asChild>
                              <Input />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignIn.Action submit asChild>
                              <Button disabled={isGlobalLoading}>
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? (
                                      <Spinner size="4" />
                                    ) : (
                                      'Continue'
                                    )
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignIn.Action>
                            <SignIn.Action navigate="choose-strategy" asChild>
                              <Button type="button" size="sm" variant="link">
                                Use another method
                              </Button>
                            </SignIn.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignIn.Strategy>

                    <SignIn.Strategy name="email_code">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Check your email</CardTitle>
                          <CardDescription>
                            Enter the verification code sent to your email
                          </CardDescription>
                          <p className="text-sm text-muted-foreground">
                            Welcome back <SignIn.SafeIdentifier />
                          </p>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <Clerk.Field name="code">
                            <Clerk.Label className="sr-only">Email verification code</Clerk.Label>
                            <div className="grid gap-y-2 items-center justify-center">
                              <div className="flex justify-center text-center">
                                <Clerk.Input
                                  type="otp"
                                  autoSubmit
                                  className="flex justify-center has-[:disabled]:opacity-50"
                                  render={({ value, status }) => {
                                    return (
                                      <div
                                        data-status={status}
                                        className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
                                      >
                                        {value}
                                      </div>
                                    )
                                  }}
                                />
                              </div>
                              <Clerk.FieldError className="block text-sm text-destructive text-center" />
                              <SignIn.Action
                                asChild
                                resend
                                className="text-muted-foreground"
                                fallback={({ resendableAfter }) => (
                                  <Button variant="link" size="sm" disabled>
                                    Didn&apos;t receive a code? Resend (
                                    <span className="tabular-nums">{resendableAfter}</span>)
                                  </Button>
                                )}
                              >
                                <Button variant="link" size="sm">
                                  Didn&apos;t receive a code? Resend
                                </Button>
                              </SignIn.Action>
                            </div>
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignIn.Action submit asChild>
                              <Button disabled={isGlobalLoading}>
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? (
                                      <Spinner size="4" />
                                    ) : (
                                      'Continue'
                                    )
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignIn.Action>
                            <SignIn.Action navigate="choose-strategy" asChild>
                              <Button size="sm" variant="link">
                                Use another method
                              </Button>
                            </SignIn.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignIn.Strategy>
                  </SignIn.Step>
                </>
              )}
            </Clerk.Loading>
          </SignIn.Root>
        </div>
      </div>
    </PageWrapper>
  )
}
